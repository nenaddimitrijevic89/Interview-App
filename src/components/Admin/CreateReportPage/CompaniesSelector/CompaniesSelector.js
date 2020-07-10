import React from 'react';
import { Row } from 'react-materialize';
import { Company } from './Company';
import style from './Company.module.css';

const CompaniesSelector = ({ getCompanyData, companies }) => {
    return (
        <Row className={style.companyWrapper}>
            {companies.map(company => <Company
                company={company}
                key={company.id}
                getData={getCompanyData}
            />)}
        </Row>
    )
}
export { CompaniesSelector };