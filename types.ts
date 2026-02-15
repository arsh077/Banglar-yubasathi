export interface FormData {
  duareSarkarRegNo: string;
  aadhaarNo: string;
  beneficiaryName: string;
  mobileNo: string;
  email: string;
  gender: 'Male' | 'Female' | 'Others' | '';
  dobDay: string;
  dobMonth: string;
  dobYear: string;
  ageYears: string;
  fathersName: string;
  mothersName: string;
  spouseName: string;
  category: 'SC' | 'ST' | 'OBC' | 'General' | '';
  certificateNo: string;
  maritalStatus: 'Unmarried' | 'Widow' | 'Married' | 'Separated' | '';
  // Address
  houseNo: string;
  village: string;
  postOffice: string;
  gpWard: string;
  block: string;
  policeStation: string;
  district: string;
  pinCode: string;
  state: string;
  
  // Page 2
  education: {
    exam: string;
    board: string;
    roll: string;
    no: string;
    year: string;
  }[];
  highestQualification: string;
  presentOccupation: string;
  // Bank
  bankName: string;
  branchName: string;
  accountNo: string;
  ifsc: string;
  
  receivedAssistance: 'Yes' | 'No' | '';
  assistanceDetails: string;
  
  // Enclosures
  encMadhyamikAdmit: boolean;
  encMarkSheet: boolean;
  encAadhaar: boolean;
  encVoter: boolean;
  encPassbook: boolean;
  encCaste: boolean;
  
  // Declaration
  declarationDate: string;
  
  // Ack
  ackName: string;
  ackRelationName: string; // Son/Daughter/Wife of
  ackDate: string;
  ackMobile: string;
  ackAadhaar: string;
  ackReceivedDate: string;
}

export const initialFormData: FormData = {
  duareSarkarRegNo: '',
  aadhaarNo: '',
  beneficiaryName: '',
  mobileNo: '',
  email: '',
  gender: '',
  dobDay: '',
  dobMonth: '',
  dobYear: '',
  ageYears: '',
  fathersName: '',
  mothersName: '',
  spouseName: '',
  category: '',
  certificateNo: '',
  maritalStatus: '',
  houseNo: '',
  village: '',
  postOffice: '',
  gpWard: '',
  block: '',
  policeStation: '',
  district: '',
  pinCode: '',
  state: 'WEST BENGAL',
  education: [
    { exam: 'MP or Equivalent', board: '', roll: '', no: '', year: '' }
  ],
  highestQualification: '',
  presentOccupation: '',
  bankName: '',
  branchName: '',
  accountNo: '',
  ifsc: '',
  receivedAssistance: '',
  assistanceDetails: '',
  encMadhyamikAdmit: false,
  encMarkSheet: false,
  encAadhaar: false,
  encVoter: false,
  encPassbook: false,
  encCaste: false,
  declarationDate: '',
  ackName: '',
  ackRelationName: '',
  ackDate: '',
  ackMobile: '',
  ackAadhaar: '',
  ackReceivedDate: ''
};