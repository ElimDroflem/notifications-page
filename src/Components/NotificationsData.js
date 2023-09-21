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
    org: "",
    unread: true,
    time: "1m ago",
    message: "",
  },
  {
    img: AngelaAvt,
    name: "Angela Gray",
    text: "followed you",
    event: "",
    org: "",
    unread: true,
    time: "5m ago",
    message: "",
  },
  {
    img: JacobAvt,
    name: "Jacob Thompson",
    text: "has joined your group",
    event: "",
    org: "Chess Club",
    unread: true,
    time: "1 day ago",
    message: "",
  },
  {
    img: RizkyAvt,
    name: "Rizky Hasanuddin",
    text: "send you a private message",
    event: "",
    org: "",
    unread: true,
    time: "5 days ago",
    message:
      "Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and i'm already having lots of fun and improving my game.",
  },
  {
    img: KimAvt,
    name: "Kimberly Smith",
    text: "commented on your picture",
    event: "",
    org: "",
    unread: false,
    time: "1 week ago",
    message: "",
  },
  {
    img: NathanAvt,
    name: "Nathan Peterson",
    text: "reacted to your recent post",
    event: "5 end-game strategies to increase your win rate",
    org: "",
    unread: false,
    time: "2 weeks ago",
    message: "",
  },
  {
    img: AnnaAvt,
    name: "Anna Kim",
    text: "left the group",
    event: "",
    org: "Chess Club",
    unread: false,
    time: "2 weeks ago",
    message: "",
  },
];

export default notificationsArray;
