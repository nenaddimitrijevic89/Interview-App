export class CandidateObj {
    constructor(candidateApi) {
        this.id = candidateApi.id
        this.name = candidateApi.name
        this.birthday = candidateApi.birthday
        this.email = candidateApi.email
        this.education = candidateApi.education
        this.avatar = candidateApi.avatar
    }
}