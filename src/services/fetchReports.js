import { baseAPI } from '../shared/baseApi';
import { ReportObj } from '../entities/ReportObj';
import Axios from 'axios';
import { storageService } from './StorageService';

class ServiceReports {

    getReports() {
        return baseAPI.get('reports')
            .then(response => response.data)
            .then(reportsList => {
                let newReportsList = reportsList.map(report => new ReportObj(report))
                return newReportsList;
            })
    }

    postReports(reportObj, token) {
        return Axios({
            method: 'POST',
            url: 'http://localhost:3333/api/reports',
            headers: {
                Authorization: `Bearer ${token}`,
            },
            data: reportObj
        })
    }

    removeReports(id) {
        const token = storageService.get("accessToken")
        return Axios({
            method: 'DELETE',
            url: `http://localhost:3333/api/reports/${id}`,
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
    }
}

export const serviceReports = new ServiceReports();