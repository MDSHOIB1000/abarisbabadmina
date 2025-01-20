import React, { useEffect, useState } from 'react';
import { FaMoneyBill, FaCreditCard, FaHandHoldingUsd, FaFingerprint } from "react-icons/fa";
import { GiTalk, GiMoneyStack, GiCash, GiReceiveMoney, GiPayMoney } from 'react-icons/gi'; // Import icons

import { use } from 'i18next';
const transactionData = [
    {
        type: 'Recharge',
        totalTransactions: '135 (₹ 1398620)',
        totalSuccess: '30 (₹ 875)',
        totalFailed: '64 (₹ 1355053)',
        totalPending: '41 (₹ 42692)',
        bgColor: '#e3f2fd',
        icon: <GiTalk style={{ fontSize: '26px' }} />,
    },
    {
        type: 'BBPS',
        totalTransactions: '131 (₹ 111591017.77)',
        bgColor: '#b2dfdb',
        icon: <FaCreditCard style={{ fontSize: '26px' }} />,
    },
    {
        type: 'DMT',
        totalTransactions: '174 (₹ 324303)',
        bgColor: '#f0f4c3',
        totalSuccess: '30 (₹ 875)',
        totalFailed: '64 (₹ 1355053)',
        icon: <FaMoneyBill style={{ fontSize: '26px' }} />,
    },
    {
        type: 'Payout',
        totalTransactions: '109 (₹ 8900352)',
        bgColor: '#d1c4e9',
        icon: <FaHandHoldingUsd style={{ fontSize: '26px' }} />,
    },
    {
        type: 'AEPS',
        totalTransactions: '165 (₹ 21636)',
        bgColor: '#c8e6c9',
        icon: <FaFingerprint style={{ fontSize: '26px' }} />,
    }
];

export const ShowTrans = ({ dasboradData }) => {

    const [data, setData] = useState(transactionData);

    useEffect(() => {
        if (dasboradData) {
            const arr = [
                {
                    ...dasboradData.dmt,
                    type: 'DMT',
                    bgColor: '#e3f2fd',
                    isopen: false,
                    icon: <GiTalk style={{ fontSize: '26px' }} />, // Example icon
                },
                {
                    ...dasboradData.CashDeposit,
                    type: 'Cash Deposit',
                    bgColor: '#e3f2fd',
                    isopen: false,
                    icon: <GiMoneyStack style={{ fontSize: '26px' }} />, // Different icon
                },
                {
                    ...dasboradData.CashWithdrew,
                    type: 'Cash Withdrew',
                    bgColor: '#e3f2fd',
                    isopen: false,
                    icon: <GiCash style={{ fontSize: '26px' }} />, // Another different icon
                },
                {
                    ...dasboradData.adhaarPay,
                    type: 'Adhaar Pay',
                    isopen: false,
                    bgColor: '#e3f2fd',
                    icon: <GiReceiveMoney style={{ fontSize: '26px' }} />, // Different icon
                },
                {
                    ...dasboradData.cms,
                    type: 'CMS',
                    isopen: false,
                    bgColor: '#e3f2fd',
                    icon: <GiPayMoney style={{ fontSize: '26px' }} />, // Another different icon
                },
                {
                    ...dasboradData.paymentRequest,
                    type: 'Payment Request',
                    bgColor: '#e3f2fd',
                    isopen: false,
                    icon: <GiTalk style={{ fontSize: '26px' }} />, // Example icon
                },
                {
                    ...dasboradData.payout,
                    type: 'Payout',
                    bgColor: '#e3f2fd',
                    isopen: false,
                    icon: <GiMoneyStack style={{ fontSize: '26px' }} />, // Different icon
                },
                {
                    ...dasboradData.quickDhan,
                    type: 'Quick Dhan',
                    isopen: false,
                    bgColor: '#e3f2fd',
                    icon: <GiCash style={{ fontSize: '26px' }} />, // Another different icon
                },
            ];
            setData(arr);
        }
    }, [dasboradData])



    const [visibleCards, setVisibleCards] = useState(5);

    const toggleCardContent = (index) => {
        const maped = data.map((item, i) => {
            if (i === index) {
                return { ...item, isopen: !item.isopen };
            }
            return item;
        });
        setData(maped);
    };

    const showMoreCards = () => {
        setVisibleCards(prevState => prevState + 2);
    };

    return (
        <div className="container">
            {data.slice(0, visibleCards).map((data, index) => (
                <div key={index} className="card" style={{ backgroundColor: data.bgColor }}>
                    <div className="card-header" onClick={() => toggleCardContent(index)}>
                        <div >{data.icon}</div>
                        <div>{data.type}</div>
                    </div>
                    <div className='card-content' style={{ margin: "10px 0" }}><span>Total Transactions:</span> <span>{data.totalAmount}</span></div>
                    {data?.isopen && (
                        <div className="card-content">
                            <div>Total Success: <span>{data.success}</span></div>
                            <div>Total Failed: <span>{data.failed}</span></div>
                            <div>Total Pending: <span>{data.pending}</span></div>
                        </div>
                    )}
                </div>
            ))}
            {visibleCards < data.length && (
                <div className="show-more" onClick={showMoreCards}>Show More</div>
            )}
        </div>
    );
};
