
export default function TableDireccion({ customerAddress }) {

    const customerAddressRow = () => {
        let addresses = [];
        addresses.push(customerAddress);

        return addresses;
    }

    return (
        <div class="table-responsive">
            <table class="table">
                <thead>
                    <tr>
                        <th>Dirección</th>
                        <th>Distrito</th>
                        <th>Num.Calle</th>
                        <th>Piso/AptMto</th>
                        <th class="col-md-2 col-sm-3">Telefono</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        customerAddressRow().map((address) => {
                            return <tr>
                                        <td>{address.direccion}</td>
                                        <td>{address.distrito}</td>
                                        <td>{address.calle}</td>
                                        <td>{address.pisoAptMto}</td>
                                        <td>{address.telefono}</td>
                                        <td>
                                            <div class="btn-group" role="group">
                                                <button type="button" class="btn btn-default"><i class="tf-pencil2" aria-hidden="true"></i></button>
                                            </div>
                                        </td>
                                    </tr>
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}