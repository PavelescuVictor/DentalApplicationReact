import { RootState } from 'store/rootReducer';
import { PATIENT_MANAGER_KEY } from './constants';
import { PatientManagerState } from './models';

export const selectPatients = (state: PatientManagerState) => state.patients;
export const selectIsLoadingPatients = (state: PatientManagerState) => state.isLoadingPatients;
export const selectHasErrorLoadingPatients = (state: PatientManagerState) =>
  state.hasErrorLoadingPatients;
export const selectHasErrorAddingPatients = (state: PatientManagerState) =>
  state.hasErrorAddingPatient;
export const selectHasErrorEditingPatients = (state: PatientManagerState) =>
  state.hasErrorEditingPatient;
export const selectHasErrorRemovingPatients = (state: PatientManagerState) =>
  state.hasErrorRemovingPatient;

export const selectFilteredPatients = (state: PatientManagerState) => state.filteredPatients;
export const getSelectedPatient = (state: PatientManagerState) => state.selectedPatient;
export const getHasSelectedPatient = (state: PatientManagerState) => state.hasSelectedPatient;

const PatientManagerSelectors = {
  getDoctorManagerState: (rootState: RootState): PatientManagerState =>
    rootState[PATIENT_MANAGER_KEY],
};

export default PatientManagerSelectors;
