function NotificationItem({ type, title, subject, to, updatedAt ,isOpen }) {
  

    return (
        <div className={`notification  ${isOpen && 'openNote'}`}>
            {/* <div className={getIconClass(type)}></div> */}
            <div className={`content`}>
                <h4>{type}</h4>
                <p>{subject}</p>
                <div style={{display:"flex" ,justifyContent:"space-between"}}> <div className="user">{to}</div>
                    <div className="time">{updatedAt}</div></div>
            </div>
        </div>
    );
}
export default NotificationItem;