import { Link } from "react-router-dom"
import { ShoppingCartOutlined } from "@ant-design/icons"

export const Navbar = () => {
    return (
        <div className="navbar">
            <div>
                <Link to="/"> Shop </Link>
                <Link to="/cart"> <ShoppingCartOutlined/> </Link>
            </div>
        </div>
    )
}