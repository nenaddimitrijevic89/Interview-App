export class ReportObj {
    constructor(reportApi) {
        this.candidateId = reportApi.candidateId
        this.name = reportApi.candidateName
        this.companyId = reportApi.companyId
        this.companyName = reportApi.companyName
        this.id = reportApi.id
        this.interviewDate = reportApi.interviewDate
        this.note = reportApi.note
        this.phase = reportApi.phase
        this.status = reportApi.status
    }
}