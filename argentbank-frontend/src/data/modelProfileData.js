/**
 * Create an instance object for profile data response called by api.
 * @class
 */
export class modelProfileData {
  constructor(profileData) {
    this.status = parseInt(profileData.status);
    this.message = String(profileData.message);
    this.createdAt = String(profileData.body.createdAt);
    this.email = String(profileData.body.email);
    this.firstName = String(profileData.body.firstName);
    this.id = String(profileData.body.id);
    this.lastName = String(profileData.body.lastName);
    this.updatedAt = String(profileData.body.updatedAt);
  }

  /**
   * Static method used to format profile data
   * @returns {object} - Object containing profile data formatted
   */
  formatProfileData() {
    return {
      profileData: {
        createdAt: this.createdAt,
        email: this.email,
        firstName: this.firstName,
        id: this.id,
        lastName: this.lastName,
        updatedAt: this.updatedAt,
      },
      profileStatus: this.status,
      profileMessage: this.message,
    };
  }
}
