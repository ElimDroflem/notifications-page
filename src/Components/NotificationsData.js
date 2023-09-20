import MarkAvt from "../assets/images/avatar-mark-webber.webp";
import AngelaAvt from "../assets/images/avatar-angela-gray.webp";
import JacobAvt from "../assets/images/avatar-jacob-thompson.webp";
import RizkyAvt from "../assets/images/avatar-rizky-hasanuddin.webp";
import KimAvt from "../assets/images/avatar-kimberly-smith.webp";
import NathanAvt from "../assets/images/avatar-nathan-peterson.webp";
import AnnaAvt from "../assets/images/avatar-anna-kim.webp";

const notificationsArray = [
  {
    img: MarkAvt,
    name: "Mark Webber",
    text: "reacted to your recent post",
    event: "My first tournament today!",
    unread: true,
    time: "1m ago",
  },
  {
    img: AngelaAvt,
    name: "Angela Gray",
    text: "followed you",
    event: "",
    unread: true,
    time: "5m ago",
  },
  {
    img: JacobAvt,
    name: "Jacob Thompson",
    text: "has joined your group",
    event: "Chess Club",
    unread: true,
    time: "1 day ago",
  },
  {
    img: RizkyAvt,
    name: "Rizky Hasanuddin",
    text: "send you a private message",
    event: "",
    unread: false,
    time: "5 days ago",
  },
  {
    img: KimAvt,
    name: "Kimberly Smith",
    text: "commented on your picture",
    event: "",
    unread: false,
    time: "1 week ago",
  },
  {
    img: NathanAvt,
    name: "Nathan Peterson",
    text: "reacted to your recent post",
    event: "5 end-game strategies to increase your win rate",
    unread: false,
    time: "2 weeks ago",
  },
  {
    img: AnnaAvt,
    name: "Anna Kim",
    text: "left the group",
    event: "Chess Club",
    unread: false,
    time: "2 weeks ago",
  },
];

export default notificationsArray;
