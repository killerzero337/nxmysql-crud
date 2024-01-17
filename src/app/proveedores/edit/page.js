import Form from "@/components/FomularioProveedores"
import { db } from "@/lib/mysql"
import { editProveedores } from "@/lib/actions"

async function page({searchParams}) {
  const [ proveedor ] = await db.query('select * from proveedores where id = ?', [ searchParams.id ]);

  return (
    <div>
        <h3>Editar Proveedor {searchParams.id}</h3>
        <Form action={editProveedores} title='Editar Proveedor' proveedor={proveedor} disabled={false}  />
    </div>
  )
}


export default page