import * as fileData from '../../../notifications.json'

export function getAllNotificationsByUser(userId) {
    return fileData.filter((notification) => notification.author.id === userId).map((notification) => notification.context);
  }