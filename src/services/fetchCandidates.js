import { baseAPI } from '../shared/baseApi';
import { CandidateObj } from '../components/entities/CandidateObj';

class ServiceCandidate {

    getCandidates() {
        return baseAPI.get('candidates')
            .then(response => response.data)
            .then(candidateList => {
                let newCandidateList = candidateList.map(candidate => new CandidateObj(candidate))
                return newCandidateList;
            })
            .catch(error => console.log(error))


    }
}

export const serviceCandidate = new ServiceCandidate();