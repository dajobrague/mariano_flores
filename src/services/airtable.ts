import Airtable from 'airtable';

// Configuración de Airtable
const AIRTABLE_PAT = process.env.NEXT_PUBLIC_AIRTABLE_PAT;
const AIRTABLE_BASE_ID = process.env.NEXT_PUBLIC_AIRTABLE_BASE;

if (!AIRTABLE_PAT || !AIRTABLE_BASE_ID) {
  throw new Error('Las variables de entorno NEXT_PUBLIC_AIRTABLE_PAT y NEXT_PUBLIC_AIRTABLE_BASE son requeridas');
}

// Configurar Airtable
Airtable.configure({
  endpointUrl: 'https://api.airtable.com',
  apiKey: AIRTABLE_PAT,
});

const base = Airtable.base(AIRTABLE_BASE_ID);

// Tipos para TypeScript
export interface AirtableRecord {
  id?: string;
  fields: Record<string, unknown>;
  createdTime?: string;
}

export interface AppointmentData {
  'Nombre Completo': string;
  'Teléfono': string;
  'Tipo de Servicio': string;
  'Fecha': string;
  'Hora': string;
  'Dentista': string[]; // Array de record IDs para linked records
}

export interface DentistaData {
  id: string;
  nombre: string;
  especialidad?: string;
  disponible?: boolean;
}

export interface ServiceData {
  id?: string;
  categoria: string;
  servicio: string;
  orden: number;
  imagen?: {
    id: string;
    url: string;
    filename: string;
    size: number;
    type: string;
    thumbnails?: {
      small?: { url: string; width: number; height: number };
      large?: { url: string; width: number; height: number };
      full?: { url: string; width: number; height: number };
    };
  }[];
}

export interface ServiceCategory {
  categoria: string;
  servicios: ServiceData[];
}

export interface TestimonialData {
  id?: string;
  nombre: string;
  puntuacion: number;
  resena: string;
  imagen_cliente?: {
    id: string;
    url: string;
    filename: string;
    size: number;
    type: string;
    thumbnails?: {
      small?: { url: string; width: number; height: number };
      large?: { url: string; width: number; height: number };
      full?: { url: string; width: number; height: number };
    };
  }[];
}

// Clase para manejar operaciones con Airtable
export class AirtableService {
  private tableName: string;

  constructor(tableName: string = 'tblK016wXTAioZURc') {
    this.tableName = tableName;
  }

  // Obtener todos los registros de una tabla
  async getRecords(): Promise<AirtableRecord[]> {
    try {
      const records = await base(this.tableName).select({
        maxRecords: 100,
        view: 'Grid view'
      }).firstPage();

      return records.map(record => ({
        id: record.id,
        fields: record.fields,
        createdTime: record._rawJson.createdTime
      }));
    } catch (error) {
      console.error('Error al obtener registros de Airtable:', error);
      throw new Error('No se pudieron obtener los registros de Airtable');
    }
  }

  // Crear un nuevo registro
  async createRecord(data: AppointmentData): Promise<AirtableRecord> {
    try {
      console.log('Intentando crear registro con datos:', JSON.stringify(data, null, 2));
      console.log('Tabla objetivo:', this.tableName);
      
      const record = await base(this.tableName).create([
        {
          fields: {
            'Nombre Completo': data['Nombre Completo'],
            'Teléfono': data['Teléfono'],
            'Tipo de Servicio': data['Tipo de Servicio'],
            'Fecha': data['Fecha'],
            'Hora': data['Hora'],
            'Dentista': data['Dentista']
          }
        }
      ]);

      console.log('Registro creado exitosamente:', record[0].id);
      return {
        id: record[0].id,
        fields: record[0].fields,
        createdTime: record[0]._rawJson.createdTime
      };
    } catch (error) {
      console.error('Error al crear registro en Airtable:', error);
      console.error('Detalles completos del error:', JSON.stringify(error, null, 2));
      console.error('Datos que se intentaron enviar:', JSON.stringify(data, null, 2));
      throw new Error('No se pudo crear el registro en Airtable');
    }
  }

  // Actualizar un registro existente
  async updateRecord(recordId: string, data: Partial<AppointmentData>): Promise<AirtableRecord> {
    try {
      const record = await base(this.tableName).update([
        {
          id: recordId,
          fields: data
        }
      ]);

      return {
        id: record[0].id,
        fields: record[0].fields,
        createdTime: record[0]._rawJson.createdTime
      };
    } catch (error) {
      console.error('Error al actualizar registro en Airtable:', error);
      throw new Error('No se pudo actualizar el registro en Airtable');
    }
  }

  // Eliminar un registro
  async deleteRecord(recordId: string): Promise<boolean> {
    try {
      await base(this.tableName).destroy([recordId]);
      return true;
    } catch (error) {
      console.error('Error al eliminar registro de Airtable:', error);
      throw new Error('No se pudo eliminar el registro de Airtable');
    }
  }

  // Buscar registros por un campo específico
  async findRecords(field: string, value: string): Promise<AirtableRecord[]> {
    try {
      const records = await base(this.tableName).select({
        filterByFormula: `{${field}} = '${value}'`,
        maxRecords: 100
      }).firstPage();

      return records.map(record => ({
        id: record.id,
        fields: record.fields,
        createdTime: record._rawJson.createdTime
      }));
    } catch (error) {
      console.error('Error al buscar registros en Airtable:', error);
      throw new Error('No se pudieron buscar los registros en Airtable');
    }
  }
}

// Exportar una instancia por defecto
export const airtableService = new AirtableService();

// Funciones helper para uso directo
export const createAppointment = async (appointmentData: AppointmentData): Promise<AirtableRecord> => {
  return await airtableService.createRecord(appointmentData);
};

export const getAppointments = async (): Promise<AirtableRecord[]> => {
  return await airtableService.getRecords();
};

export const findAppointmentByEmail = async (email: string): Promise<AirtableRecord[]> => {
  return await airtableService.findRecords('email', email);
};

// Clase específica para servicios
export class ServicesAirtableService {
  private tableName: string = 'tblyk6jA2Q7mQPz2U';

  // Obtener todos los servicios organizados por categoría
  async getServicesByCategory(): Promise<ServiceCategory[]> {
    try {
      const records = await base(this.tableName).select({
        view: 'Grid view',
        sort: [
          { field: 'Categoría', direction: 'asc' },
          { field: 'Orden', direction: 'asc' }
        ]
      }).all();

      const servicesMap = new Map<string, ServiceData[]>();

      records.forEach(record => {
        const fields = record.fields;
        const serviceData: ServiceData = {
          id: record.id,
          categoria: fields['Categoría'] as string || '',
          servicio: fields['Servicio'] as string || '',
          orden: fields['Orden'] as number || 1,
          imagen: fields['Imagen'] as ServiceData['imagen'] || undefined
        };

        if (!servicesMap.has(serviceData.categoria)) {
          servicesMap.set(serviceData.categoria, []);
        }
        servicesMap.get(serviceData.categoria)!.push(serviceData);
      });

      // Convertir el Map a array y ordenar servicios dentro de cada categoría
      const categories: ServiceCategory[] = Array.from(servicesMap.entries()).map(([categoria, servicios]) => ({
        categoria,
        servicios: servicios.sort((a, b) => a.orden - b.orden)
      }));

      return categories;
    } catch (error) {
      console.error('Error al obtener servicios de Airtable:', error);
      throw new Error('No se pudieron obtener los servicios de Airtable');
    }
  }

  // Obtener servicios por categoría específica
  async getServicesBySpecificCategory(categoria: string): Promise<ServiceData[]> {
    try {
      const records = await base(this.tableName).select({
        filterByFormula: `{Categoría} = '${categoria}'`,
        sort: [{ field: 'Orden', direction: 'asc' }]
      }).all();

      return records.map(record => {
        const fields = record.fields;
        return {
          id: record.id,
          categoria: fields['Categoría'] as string || '',
          servicio: fields['Servicio'] as string || '',
          orden: fields['Orden'] as number || 1,
          imagen: fields['Imagen'] as ServiceData['imagen'] || undefined
        };
      });
    } catch (error) {
      console.error('Error al obtener servicios por categoría:', error);
      throw new Error('No se pudieron obtener los servicios por categoría');
    }
  }
}

// Exportar instancia del servicio de servicios
export const servicesAirtableService = new ServicesAirtableService();

// Funciones helper para servicios
export const getServicesByCategory = async (): Promise<ServiceCategory[]> => {
  return await servicesAirtableService.getServicesByCategory();
};

export const getServicesBySpecificCategory = async (categoria: string): Promise<ServiceData[]> => {
  return await servicesAirtableService.getServicesBySpecificCategory(categoria);
};

// Clase específica para reseñas/testimoniales
export class TestimonialsAirtableService {
  private tableName: string = 'tblCOI0myB4ZS6P5Q';

  // Obtener todas las reseñas
  async getTestimonials(): Promise<TestimonialData[]> {
    try {
      const records = await base(this.tableName).select({
        view: 'Grid view',
        sort: [
          { field: 'Puntuación', direction: 'desc' } // Ordenar por puntuación más alta primero
        ]
      }).all();

      return records.map(record => {
        const fields = record.fields;
        return {
          id: record.id,
          nombre: fields['Nombre'] as string || '',
          puntuacion: fields['Puntuación'] as number || 5,
          resena: fields['Reseña'] as string || '',
          imagen_cliente: fields['Imagen Cliente'] as TestimonialData['imagen_cliente'] || undefined
        };
      });
    } catch (error) {
      console.error('Error al obtener reseñas de Airtable:', error);
      throw new Error('No se pudieron obtener las reseñas de Airtable');
    }
  }

  // Obtener reseñas por puntuación mínima
  async getTestimonialsByRating(minRating: number): Promise<TestimonialData[]> {
    try {
      const records = await base(this.tableName).select({
        filterByFormula: `{Puntuación} >= ${minRating}`,
        sort: [{ field: 'Puntuación', direction: 'desc' }]
      }).all();

      return records.map(record => {
        const fields = record.fields;
        return {
          id: record.id,
          nombre: fields['Nombre'] as string || '',
          puntuacion: fields['Puntuación'] as number || 5,
          resena: fields['Reseña'] as string || '',
          imagen_cliente: fields['Imagen Cliente'] as TestimonialData['imagen_cliente'] || undefined
        };
      });
    } catch (error) {
      console.error('Error al obtener reseñas por puntuación:', error);
      throw new Error('No se pudieron obtener las reseñas por puntuación');
    }
  }
}

// Exportar instancia del servicio de reseñas
export const testimonialsAirtableService = new TestimonialsAirtableService();

// Funciones helper para reseñas
export const getTestimonials = async (): Promise<TestimonialData[]> => {
  return await testimonialsAirtableService.getTestimonials();
};

export const getTestimonialsByRating = async (minRating: number): Promise<TestimonialData[]> => {
  return await testimonialsAirtableService.getTestimonialsByRating(minRating);
};

// Clase específica para dentistas
export class DentistasAirtableService {
  private tableName: string = 'tblAeRust3zAUHkJm'; // ID de la tabla de dentistas

  // Obtener todos los dentistas
  async getDentistas(): Promise<DentistaData[]> {
    try {
      const records = await base(this.tableName).select({
        view: 'Grid view'
        // Remover el sort inicialmente para evitar errores de campo
      }).all();

      return records.map(record => {
        const fields = record.fields;
        console.log('Campos disponibles en dentista:', Object.keys(fields)); // Debug
        return {
          id: record.id,
          nombre: fields['Nombre'] as string || fields['nombre'] as string || fields['Name'] as string || `Dentista ${record.id}`,
          especialidad: fields['Especialidad'] as string || fields['especialidad'] as string || fields['Specialty'] as string || undefined,
          disponible: fields['Disponible'] as boolean || fields['disponible'] as boolean || fields['Available'] as boolean || true
        };
      });
    } catch (error) {
      console.error('Error al obtener dentistas de Airtable:', error);
      console.error('Detalles del error:', JSON.stringify(error, null, 2));
      throw new Error('No se pudieron obtener los dentistas de Airtable');
    }
  }

  // Obtener dentistas disponibles solamente
  async getDentistasDisponibles(): Promise<DentistaData[]> {
    try {
      // Por ahora, simplemente devolver todos los dentistas hasta que sepamos los nombres exactos de los campos
      return await this.getDentistas();
    } catch (error) {
      console.error('Error al obtener dentistas disponibles:', error);
      // Si falla, devolver todos los dentistas
      return await this.getDentistas();
    }
  }
}

// Exportar instancia del servicio de dentistas
export const dentistasAirtableService = new DentistasAirtableService();

// Funciones helper para dentistas
export const getDentistas = async (): Promise<DentistaData[]> => {
  return await dentistasAirtableService.getDentistas();
};

export const getDentistasDisponibles = async (): Promise<DentistaData[]> => {
  return await dentistasAirtableService.getDentistasDisponibles();
};
