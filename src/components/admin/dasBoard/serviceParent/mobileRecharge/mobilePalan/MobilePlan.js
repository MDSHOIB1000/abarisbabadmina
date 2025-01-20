
import { useState } from 'react';
import '../mobilePalan/mobilePlan.css'
import PlanList from './planList/PlanList';
function MobilePlan() {
    const [activeTab, setActiveTab] = useState(0);

    const tabs = ['FULLTT', 'TOPUP', '3G/4G/5G', '2G', 'Romaing'];
    const content = [
        <PlanList />,
        <PlanList />,
        <PlanList />,
        <PlanList />,
        <PlanList />
    ];
    return (
        <>
            <div className="tabs">
                <div className="tab-buttons">
                    {tabs.map((tab, index) => (
                        <button
                            key={index}
                            className={index === activeTab ? 'active' : ''}
                            onClick={() => setActiveTab(index)}
                        >
                            {tab}
                        </button>
                    ))}
                </div>
                <div className="tab-content">
                    {content[activeTab]}
                </div>
            </div>
        </>
    )
}
export default MobilePlan