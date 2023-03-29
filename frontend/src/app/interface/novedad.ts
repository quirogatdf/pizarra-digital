export interface Novedad {
  id?: number,
  docenteId?: number,
  fecha_inicio: Date,
  fecha_fin: Date,
  observaciones: String,
  docente: {
    apellido: string,
    nombre: string
  }
}