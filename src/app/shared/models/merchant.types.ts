export interface Merchant
{
    id: string;
    balances: [ {activebalance:string,frozenbalance:string,currencyname:string }];
    bankAccounts: [ {id:string,account:string,active:boolean,createdAt:string,currency:{active:boolean,code?:string,createdAt:string,deleted:boolean,id:string,name:string} }];
    bankName: string;
    blocked:boolean;
    blockedAt?:string;
    companyName:string;
    companyType:string;
    completed:boolean;
    createdAt:string;
    deleted:boolean;
    dunsNumber?:string;
    email:string;
    factAddress?:string;
    ibanNumber?:string;
    inn:string;
    legalAddress?:string;
    logoFilePath?:string;
    mfo?:string;
    notes?:string;
    oked?:string;
    passportFilePath?:string;
    phoneNumber:string;
    registrationCertificateFilePath?: string;
    rejected:boolean;
    rejectedAt?:string;
    responsbilePersonPhoneNumber:string;
    responsiblePersonFistName:string;
    responsiblePersonLastName:string;
    supervisorFirstName:string;
    supervisorLastName:string;
    taxPayerCode?:string;
    transportationCertificateFilePath?:string;
    user:{id,lastLogin?,password?,userType}
    verified:boolean;
    verifiedAt?:string;
}
