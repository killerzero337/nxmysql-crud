import Form from "@/components/FomularioProveedores" //CAMBIAR ESTO PARA EL NUEVO FORMULARIO
import { newProveedores } from "@/lib/actions"

function page() {
  return (
    <div>
        <h3>Nuevo artículo</h3>
        <Form action={newProveedores} title='Crear artículo' articulo={null} disabled={false}  />
    </div>
  )
}

export default page