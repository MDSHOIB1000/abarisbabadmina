import React from 'react'
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import Dashboard from '../../settingRight/dashboard/Dashboard';
import Modules from '../../settingRight/modules/Modules';
import MarketPlaceSettings from '../../settingRight/marketplaceSettings/MarketPlaceSettings';
import GeoLocationSettings from '../../settingRight/geoLocationSettings/GeoLocationSettings';
import OrderSettings from '../../settingRight/orderSettings/OrderSettings';
import CommisionSettings from '../../settingRight/commisionSettings/CommisionSettings';
import WithdrawalSettings from '../../settingRight/withdrawalSettings/WithdrawalSettings';
import PaymentSettings from '../../settingRight/paymentSettings/PaymentSettings';
import ShippingSettings from '../../settingRight/shippingSettings/ShippingSettings';
import RefundSettings from '../../settingRight/refundSettings/RefundSettings';
import ReviewSettings from '../../settingRight/reviewSettings/ReviewSettings';
import VendorRegistration from '../../settingRight/vendorRegistration/VendorRegistration';
import DashboardPages from '../../settingRight/dashboardPage/DashboardPages';
import MenuManager from '../../settingRight/menuManager/MenuManager';
function SettingAside() {
    const settingsAsideMenu = {
        "navItems": [
            {
                "eventKey": "first",
                "iconClassName": "fa-sharp fa-solid fa-tv",
                "label": "Dashboard"
            },
            {
                "eventKey": "second",
                "iconClassName": "fa-sharp fa-solid fa-house-chimney",
                "label": "Modules"
            },
            {
                "eventKey": "third",
                "iconClassName": "fa-sharp fa-solid fa-fan",
                "label": "Market Settings"
            },
            {
                "eventKey": "Four",
                "iconClassName": "fa-sharp fa-solid fa-person-circle-exclamation",
                "label": "Geo Location"
            },
            {
                "eventKey": "Five",
                "iconClassName": "fa-sharp fa-solid fa-cart-shopping",
                "label": "Order Settings"
            },
            {
                "eventKey": "Six",
                "iconClassName": "fa-light fa-percent",
                "label": "Commission Settings"
            },
            {
                "eventKey": "Seven",
                "iconClassName": "fa-sharp fa-solid fa-credit-card",
                "label": "Withdrawal Settings"
            },
            {
                "eventKey": "Eight",
                "iconClassName": "fa-sharp fa-solid fa-file-invoice-dollar  ",
                "label": "Payment Settings"
            },
            {
                "eventKey": "Nine",
                "iconClassName": "fa-sharp fa-solid fa-truck",
                "label": "Shipping Settings"
            },
            {
                "eventKey": "Ten",
                "iconClassName": "fa-sharp fa-solid fa-retweet",
                "label": "Refund Settings"
            },
            {
                "eventKey": "Eleven",
                "iconClassName": "fa-sharp fa-solid fa-message",
                "label": "Review Settings"
            },
            {
                "eventKey": "Twelve",
                "iconClassName": "fa-sharp fa-solid fa-user-tie",
                "label": "Vendor Registration"
            },
            /* {
                "eventKey": "Thirteen",
                "iconClassName": "fa-sharp fa-solid fa-image",
                "label": "Store Style"
            },*/
            {
                "eventKey": "Fourteen",
                "iconClassName": "fa-sharp fa-solid fa-image",
                "label": "Dashboard Page"
            }, 
            {
                "eventKey": "Fifteen",
                "iconClassName": "fa-sharp fa-solid fa-newspaper",
                "label": "Menu Manager"
            },
            {
                "eventKey": "Sixteen",
                "iconClassName": "fa-sharp fa-solid fa-credit-card",
                "label": "Chat Box"
            },
            {
                "eventKey": "Eighteen",
                "iconClassName": "fa-sharp fa-solid fa-credit-card",
                "label": "Notification Manager"
            },
            {
                "eventKey": "Nineteen",
                "iconClassName": "fa-sharp fa-solid fa-credit-card",
                "label": "Email Settings"
            },
            {
                "eventKey": "Twenty",
                "iconClassName": "fa-sharp fa-solid fa-credit-card",
                "label": "Inquiries Settings"
            },
            {
                "eventKey": "Twenty-one",
                "iconClassName": "fa-sharp fa-solid fa-credit-card",
                "label": "Product Type Categories"
            },
            {
                "eventKey": "Twenty-two",
                "iconClassName": "fa-sharp fa-solid fa-credit-card",
                "label": "Categories Wise Attributes"
            },
            {
                "eventKey": "Twenty-three",
                "iconClassName": "fa-sharp fa-solid fa-credit-card",
                "label": "Product Custom Validation"
            },
            {
                "eventKey": "Twenty-four",
                "iconClassName": "fa-sharp fa-solid fa-credit-card",
                "label": "Store Policies"
            },
            {
                "eventKey": "Twenty-five",
                "iconClassName": "fa-sharp fa-solid fa-credit-card",
                "label": "Store Invoice"
            },
            {
                "eventKey": "Twenty-six",
                "iconClassName": "fa-sharp fa-solid fa-credit-card",
                "label": "Store Hours"
            },
            {
                "eventKey": "Twenty-seven",
                "iconClassName": "fa-sharp fa-solid fa-credit-card",
                "label": "Store Badges"
            },
            {
                "eventKey": "Twenty-eight",
                "iconClassName": "fa-sharp fa-solid fa-credit-card",
                "label": "Store Verification"
            },
            {
                "eventKey": "Twenty-nine",
                "iconClassName": "fa-sharp fa-solid fa-credit-card",
                "label": "Groups & Staffs "
            },
            {
                "eventKey": "Thirty",
                "iconClassName": "fa-sharp fa-solid fa-credit-card",
                "label": "Data Cleanup"
            },










        ]
    }

    return (
        <>
            <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                <Row>
                    <Col sm={3}>
                        <Nav variant="pills" className="flex-column">
                            {settingsAsideMenu.navItems.map((item) => {
                                return <Nav.Item className='mt-1 border bg-dark'>
                                    <Nav.Link eventKey={item.eventKey} className='p-2 rounded-0 text-light'>
                                        <strong>
                                            <span className='m-2 border-2 border-white'>
                                                <i className={item?.iconClassName}></i>
                                            </span>
                                            {item.label}
                                        </strong>
                                    </Nav.Link>
                                </Nav.Item>
                            })}
                        </Nav>
                    </Col>
                    <Col sm={9}>
                        <Tab.Content>
                            <Tab.Pane eventKey="first">
                                <Dashboard />
                            </Tab.Pane>
                            <Tab.Pane eventKey="second">
                                <Modules />
                            </Tab.Pane>
                            <Tab.Pane eventKey="third">
                                <MarketPlaceSettings />
                            </Tab.Pane>
                            <Tab.Pane eventKey="Four">
                                <GeoLocationSettings />
                            </Tab.Pane>
                            <Tab.Pane eventKey="Five">
                                <OrderSettings />
                            </Tab.Pane>
                            <Tab.Pane eventKey="Six">
                                <CommisionSettings />
                            </Tab.Pane>
                            <Tab.Pane eventKey="Seven">
                                <WithdrawalSettings />
                            </Tab.Pane>
                            <Tab.Pane eventKey="Eight">
                                <PaymentSettings />
                            </Tab.Pane>
                            <Tab.Pane eventKey="Nine">
                                <ShippingSettings />
                            </Tab.Pane>
                            <Tab.Pane eventKey="Ten">
                                <RefundSettings />
                            </Tab.Pane>
                            <Tab.Pane eventKey="Eleven">
                                <ReviewSettings />
                            </Tab.Pane>
                            <Tab.Pane eventKey="Twelve">
                                <VendorRegistration />
                            </Tab.Pane>
                            <Tab.Pane eventKey="Fourteen">
                                <DashboardPages />
                            </Tab.Pane>
                            <Tab.Pane eventKey="Fifteen">
                                <MenuManager />
                            </Tab.Pane>
                        </Tab.Content>
                    </Col>
                </Row>
            </Tab.Container>
        </>
    )
}

export default SettingAside
