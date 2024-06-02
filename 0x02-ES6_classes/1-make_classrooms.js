// 1-make_classrooms.js
import ClassRoom from './0-classroom'; // Remove file extension and use single quotes

export default function initializeRooms() {
  return [
    new ClassRoom(19),
    new ClassRoom(20),
    new ClassRoom(34),
  ];
}
