import { useEffect, useState } from "react"
import { service_user_permission } from "../../../api/login/Login"
import MoneyTransfer from "../../../components/admin/moneyTransfer/MoneyTransfer"
import ServicePermissionTransfer from "./servicePermissionTransfer/ServicePermissionTransfer"

function MoneyTransferPage() {
    const [moneyTrasfer, setMoneyTransfer] = useState(false)

    const [activeMessage, setActiveMessage] = useState()
    const [buyMessage, setBuyMessage] = useState()

    const servicePermission = async () => {
        try {
            const res = await service_user_permission()
            if (res?.data?.data?.is_active == false) {
                setActiveMessage('Please Admin Side Active User')
            }
            if (res?.data?.data?.is_active == true) {
                if (res?.data?.data?.is_buy == false) {
                    setBuyMessage('Please Purchase')
                }
            }

            if (res?.data?.data?.is_active == true && res?.data?.data?.is_buy == true) {
                setMoneyTransfer(true)
            }
        } catch (error) {

        }
    }

    useEffect(() => {
        servicePermission()
    }, [])
    return (
        <>
            {moneyTrasfer ? <MoneyTransfer /> : <ServicePermissionTransfer activeMessage={activeMessage} buyMessage={buyMessage} />}

        </>
    )
}
export default MoneyTransferPage