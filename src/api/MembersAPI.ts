import axios from 'axios'
import Member from '../types/Member';

const instance = axios.create({
    baseURL: 'http://localhost:5000',
});

const getAllMembers = () => {
    return instance.get('/members')
}

const updateMember = (member: Member) => {
    return instance.put(`/members/${member.id}`, {
        "overview": member.overview
    })
}

export default {
    getAllMembers,
    updateMember
}