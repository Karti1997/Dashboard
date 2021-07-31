export class Feedback {
    charttype: string;
    title: string;
    subtitle: string;
    yaxis: string;
    table: boolean;
    xaxis: [];
    message: [];
};

export const ChartType = ['Column','Pie','Doughnut','stacked-column','Gauge','Dual-axis','Area'];
export const Xaxisvalues=[{name:'Month',value:['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']},
{name:'hour',value:['8AM','9AM','10AM','11AM','12PM','1PM','2PM','3PM','4PM','5PM','6PM']},{name:'week',value:['1','2','3','4']},
{name:'Year',value:['2009','2010','2011','2012','2013','2014','2015','2016','2017','2018','2019','2020']}];
export const AxisData=[{name:'Departments',value:[{
    name: 'Polytechnic',
    data: [10, 10, 20, 19, 25,6 ,7, 19,43,36,7,44]
  }, {
    name: 'Engineering',
    data: [18, 38, 40, 19, 23,7, 17, 60,34,24,22,27]
  }, {
    name: 'Computer Application',
    data: [25, 8, 30, 19, 13,8, 37, 35,43,54,24,15]
  }, {
    name: 'Fashion Design',
    data: [28, 18, 20, 19,9, 16, 27, 20,21,45,34,56]
  }, {
    name: 'Mathematics',
    data: [20, 29, 10, 23,10, 26, 25, 30,25,46,53,21]
  }]},
{name:'visitors',value:[{
    name: 'Students',
    data: [18, 38, 40, 19, 23,7, 17, 60,34,24,22,27]
  }, {
    name: 'Faculty',
    data: [25, 8, 30, 19, 13,8, 37, 35,43,54,24,15]
  },{
    name: 'Non teaching staffs',
    data: [28, 18, 20, 19,9, 16, 27, 20,21,45,34,56]
  }]
}];
