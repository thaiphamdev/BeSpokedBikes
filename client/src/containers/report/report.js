import React, { useEffect, useState } from 'react';
import './report.css';
import '../../common.css'
import { priceFormat } from '../../utils';

const ReportPage = (props) => {
    const { report, getReport } = props;

    useEffect(() => {
        getReport();
    }, []);



    const renderRow = (customer) => {

        return (
            <tr key={customer.id}>
                <td>{customer.firstName}</td>
                <td>{customer.lastName}</td>
                <td>{customer.address}</td>
                <td>{customer.phone}</td>
                <td>{customer.startDate}</td>
            </tr>
        )
    }
    return (
        <div className="PageContainer">
            <div className="Heading">
                <h1>Customers Page</h1>
            </div>
            <main>
                {report?.isLoading && <div>Loading...</div>}
                {report?.isError && <div>Oops... Something went wrong...</div>}
                {!report?.isLoading && !report?.isError && report?.respone && (
                    <div>
                        {Object.entries(report.respone).map(([year, values]) => (
                            <div>
                                <div>Year of {year}</div>
                                <div className='valueContent'>
                                    {Object.entries(values).map(([quarter, values]) => (
                                        <div>
                                            <div>{quarter}</div>
                                            <div className='valueContent'>
                                                {Object.entries(values).map(([name, value]) => (
                                                    <div>
                                                        <div>{`${name}: $ ${priceFormat(value)}`}</div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </main>
        </div>
    );
}

export default ReportPage;