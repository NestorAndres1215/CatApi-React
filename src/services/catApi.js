export const obtenerRazas = async () => {
  const res = await fetch("https://api.thecatapi.com/v1/breeds");
  if (!res.ok) throw new Error("Error al obtener las razas");
  return res.json();
};
