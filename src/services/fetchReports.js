import { baseAPI } from '../shared/baseApi';
import { ReportObj } from '../entities/ReportObj';

class ServiceReports {

    getReports() {
        return baseAPI.get('reports')
            .then(response => response.data)
            .then(reportsList => {
                let newReportsList = reportsList.map(report => new ReportObj(report))
                return newReportsList;
            })
    }
}

export const serviceReports = new ServiceReports();