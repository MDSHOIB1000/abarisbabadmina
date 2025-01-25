import React, { useState } from 'react'
import "./modules.css"
function Modules() {
    const cards = [
        { id: 1, title: "Article", icon: "fa-sharp fa-solid fa-newspaper", isActive: false },
        { id: 2, title: "Customer", icon: "fa-solid fa-user", isActive: true },
        { id: 3, title: "Store Coupon", icon: "fa-solid fa-tag", isActive: true },
        { id: 4, title: "Policy", icon: "fa-solid fa-file", isActive: true },
        { id: 5, title: "Membership", icon: "fa-solid fa-users", isActive: true },
        { id: 6, title: "Profile", icon: "fa-solid fa-user-circle", isActive: true },
        { id: 7, title: "Withdrawal", icon: "fa-solid fa-money-bill", isActive: true },
        { id: 8, title: "Refund", icon: "fa-solid fa-undo", isActive: true },
        { id: 9, title: "Store Review", icon: "fa-solid fa-star", isActive: true },
        { id: 10, title: "Store Hours", icon: "fa-solid fa-clock", isActive: true },
        { id: 11, title: "Media", icon: "fa-solid fa-photo-video", isActive: true },
        { id: 12, title: "Vendor Ledger", icon: "fa-solid fa-book", isActive: true },
        { id: 13, title: "Single Product Multi-vendor", icon: "fa-solid fa-box", isActive: true },
        { id: 14, title: "Add to Store Catalog", icon: "fa-solid fa-plus-square", isActive: true },
        { id: 15, title: "Inquiry", icon: "fa-solid fa-envelope", isActive: true },
        { id: 16, title: "Inquiry Tab", icon: "fa-solid fa-question-circle", isActive: true },
        { id: 17, title: "Catalog", icon: "fa-solid fa-th-large", isActive: true },
        { id: 18, title: "Pay for Product", icon: "fa-solid fa-credit-card", isActive: true },
        { id: 19, title: "Popup Add Product", icon: "fa-solid fa-plus", isActive: true },
        { id: 20, title: "Custom Field", icon: "fa-solid fa-pen", isActive: true },
        { id: 21, title: "Notification", icon: "fa-solid fa-bell", isActive: true },
        { id: 22, title: "Direct Message", icon: "fa-solid fa-paper-plane", isActive: true },
        { id: 23, title: "Knowledge Base", icon: "fa-solid fa-book-open", isActive: true },
        { id: 24, title: "Announcement", icon: "fa-solid fa-bullhorn", isActive: true },
        { id: 25, title: "Product Import", icon: "fa-solid fa-download", isActive: true },
        { id: 26, title: "Bulk Stock Manager", icon: "fa-solid fa-boxes", isActive: true },
        { id: 27, title: "Shipment Tracking", icon: "fa-solid fa-shipping-fast", isActive: true },
        { id: 28, title: "Support Ticket", icon: "fa-solid fa-ticket-alt", isActive: true },
        { id: 29, title: "Store Invoice", icon: "fa-solid fa-file-invoice", isActive: true },
        { id: 30, title: "Store Vacation", icon: "fa-solid fa-plane", isActive: true },
        { id: 31, title: "Seller Verification", icon: "fa-solid fa-check-circle", isActive: true },
        { id: 32, title: "Vendor Badges", icon: "fa-solid fa-award", isActive: true },
        { id: 33, title: "Store Follower", icon: "fa-solid fa-users", isActive: true },
        { id: 34, title: "Live Chat", icon: "fa-solid fa-comments", isActive: true },
        { id: 35, title: "ShipStation", icon: "fa-solid fa-ship", isActive: true },
        { id: 36, title: "Facebook for Marketplace", icon: "fa-brands fa-facebook", isActive: true },
        { id: 37, title: "Store Branch", icon: "fa-solid fa-store", isActive: true },
        { id: 38, title: "Analytics", icon: "fa-solid fa-chart-bar", isActive: true },
    ];
    const [cardStates, setCardStates] = useState(cards);

    // Toggle handler for individual cards
    const handleToggle = (id) => {
        setCardStates((prevState) =>
            prevState.map((card) =>
                card.id === id ? { ...card, isActive: !card.isActive } : card
            )
        );
    };

    return (
        <>
            <div className="row">
                <div className="col-xl-12">
                    <div className="card">
                        <div className="card-body p-0">
                            <div className="active-projects style-1">
                                <div className="tbl-caption tbl-caption-2">
                                    <h4 className="heading mb-0 p-2">Module Controller</h4>
                                </div>
                                <p className="border-b-1">Configure what to hide from your dashboard</p>
                                <div style={{ maxHeight: "1000px", overflowY: "scroll" }}>
                                    <div className="row g-3">
                                        {cardStates.map((card) => (
                                            <div className="col-md-4" key={card.id}>
                                                <div className="card p-3 shadow-sm custom-card">
                                                    <div className="d-flex align-items-center justify-content-between">
                                                        {/* Left section */}
                                                        <div className="d-flex align-items-center">
                                                            <div className="icon-circle bg-dark text-white me-3">
                                                                <i className={`${card.icon} fs-4`} aria-hidden="true"></i>
                                                            </div>
                                                            <h6 className="mb-0">{card.title}</h6>
                                                        </div>

                                                        {/* Toggle switch */}
                                                        <div className="form-check form-switch">
                                                            <input
                                                                className="form-check-input"
                                                                type="checkbox"
                                                                id={`toggle${card.id}`}
                                                                checked={card.isActive}
                                                                onChange={() => handleToggle(card.id)}
                                                                aria-checked={card.isActive}
                                                                aria-label={`Toggle ${card.title} ${card.isActive ? 'on' : 'off'}`}
                                                            />
                                                            <label
                                                                className={`form-check-label ${card.isActive ? "text-success" : "text-danger"}`}
                                                                htmlFor={`toggle${card.id}`}
                                                            >
                                                                {card.isActive ? "ON" : "OFF"}
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className="col-xl-12 mb-3">
                                    <div className="card">
                                        <p><b>Analytics</b>: Associate your WCFM with WCFM - Analytics to access this feature.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Modules
