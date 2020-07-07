import { baseAPI } from '../shared/baseApi';
import { CompanyObj } from '../entities/CompanyObj';

class ServiceCompanies {

    getCompanies() {
        return baseAPI('companies')
            .then(response => response.data)
            .then(companiesList => {
                let newCompaniesList = companiesList.map(company => new CompanyObj(company))
                return newCompaniesList;
            })
    }
}

export const serviceCompanies = new ServiceCompanies();