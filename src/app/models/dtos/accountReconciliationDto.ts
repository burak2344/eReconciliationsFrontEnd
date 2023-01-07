export interface AccountReconciliationDto {
  id: number;
  companyId: number;
  currencyAccountId: number;
  startingDate: string;
  endingDate: string;
  currencyId: number;
  currencyDebit: number;
  currencyCredit: number;
  isSendEmail: boolean;
  sendEmailDate: string;
  isEmailRead: boolean;
  smailReadDate: string;
  isResultSucceed: boolean;
  resultDate: string;
  resultNote: string;
  guid: string;
  companyName: string;
  companyTaxDepartment: string;
  companyTaxIdNumber: string;
  companyIdentityNumber: string;
  accountCode: string;
  accountName: string;
  accountTaxDepartment: string;
  accountTaxIdNumber: string;
  accountIdentityNumber: string;
  accountEmail: string;
  currencyCode: string;
}
