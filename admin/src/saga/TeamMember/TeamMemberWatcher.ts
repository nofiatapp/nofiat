import { call, put, takeEvery } from "redux-saga/effects";
import { setLoading } from "../../store/types/Loading";
import { IEmployeeInTeam } from "../../types";
import { login } from "../../store/types/User";
import {
  GET_EMPLOYEE_IN_TEAM,
  setEmployeeInTeam,
} from "../../store/types/TeamMember";
import { currentWalletConf, initEmployeeInTeam } from "../../consts";

const asyncGetTeamMember = async () => {
  const user = await currentWalletConf.checkIsTeamMember();
  
  if (user) return user;
  return initEmployeeInTeam;
};

function* TeamMemberWorker(): any {
  yield put(setLoading(true));
  const employee: IEmployeeInTeam = yield call(asyncGetTeamMember);

  if (employee.isExist) {
    yield put(login("member"));
    yield put(setEmployeeInTeam(employee));
  }

  yield put(setLoading(false));
}

export function* TeamMemberWatcher() {
  yield takeEvery(GET_EMPLOYEE_IN_TEAM, TeamMemberWorker);
}
