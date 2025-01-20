import { useEffect, useState } from "react";
import NotificationItem from "../../components/notification/NotificationItem";
import { getsNotification } from "../../api/login/Login";
const notifications = [
  {
    type: 'new-user',
    title: 'New Registration: Finibus Bonorum',
    message: 'Sed ut perspiciatis unde omnis ilaudantium',
    user: 'Allen Deu',
    isOpen: true,
    time: '24 Nov 2018 at 9:30 AM'
  },
  {
    type: 'message',
    title: 'Darren Smith sent new message',
    message: 'Sed ut perspiciatis unde laudantium',
    user: 'Darren',
    isOpen: true,
    time: '24 Nov 2018 at 9:30 AM'
  },
  {
    type: 'comment',
    title: 'Arin Ganshiram Commented on post',
    message: 'Sed ut perspiciatis unde laudantium',
    user: 'Arin Ganshiram',
    isOpen: false,
    time: '24 Nov 2018 at 9:30 AM'
  },
  {
    type: 'connect',
    title: 'Jullet Den Connect Allen Depk',
    message: 'Sed ut perspiciatis unde laudantium',
    user: 'Jullet Den',
    isOpen: false,
    time: '24 Nov 2018 at 9:30 AM'
  },
  {
    type: 'connect',
    title: 'Jullet Den Connect Allen Depk',
    message: 'Sed ut perspiciatis unde laudantium',
    user: 'Jullet Den',
    isOpen: false,
    time: '24 Nov 2018 at 9:30 AM'
  }
];
function NotificationPage() {


  const [notifications, setNotifications] = useState([]);
  const getNotification = async () => {
    try {
      const data = await getsNotification();
      setNotifications(data?.data?.notification);
    } catch (error) {
      alert(error.message);
    }
  };
  useEffect(() => {
    getNotification()
  }, [])
  return (
    <div className="">
      {notifications?.length ? notifications?.map((notif, index) => (
        <NotificationItem key={index} {...notif} />
      )) : "No Notification"}
    </div>
  )
}
export default NotificationPage