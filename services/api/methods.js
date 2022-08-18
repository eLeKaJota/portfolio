import api from './api';

export async function methodGet (url, query, token) {
  try {
    const { status, data } = await api.get(url, { params: query, headers: { Authorization: `Bearer ${token}` } });
    if (status === 200) {
      const response = { status, data };
      return response;
    } else {
      alert('GET: something has wrong ' + url + status);
    }
  } catch (error) {
    const response = { status: error.response };
    return response;
  }
}

export async function methodPost (url, formData, token) {
  try {
    const { status, data } = await api.post(url, JSON.stringify(formData), { headers: { Authorization: `Bearer ${token}` } });
    if (status === 201 || status === 200) {
      const response = { status, data };
      return response;
    } else {
      alert('POST: something has wrong ' + url + ' ' + status);
    }
  } catch (error) {
    const response = {
      status: error.response.status,
      data: error.response.data
    };
    return response;
  }
}

export async function methodPostWithout (url, formData, token) {
  try {
    const { status, data } = await api.post(url, formData, { headers: { Authorization: `Bearer ${token}` } });
    if (status === 201 || status === 200) {
      const response = { status, data };
      return response;
    } else {
      alert('POST: something has wrong ' + url + ' ' + status);
    }
  } catch (error) {
    const response = {
      status: error.response.status,
      data: error.response.data
    };
    return response;
  }
}

export async function methodFormData (url, formData, token) {
  try {
    const { status, data } = await api.post(url, formData, { headers: { Authorization: `Bearer ${token}` } });
    if (status === 201 || status === 200) {
      const response = { status, data };
      return response;
    } else {
      alert('POST: something has wrong ' + url + ' ' + status);
    }
  } catch (error) {
    const response = {
      status: error.response.status,
      data: error.response.data
    };
    return response;
  }
}

export const methodPut = async (url, params, token) => {
  try {
    const { status, data } = await api.put(url, params, { headers: { Authorization: `Bearer ${token}` } });
    if (status === 200 || status === 400) {
      const rs = { status, data };
      return rs;
    } else {
      alert('PUT: something has wrong ' + url + ' ' + status);
    }
  } catch (error) {
    const rs = { status: error.response.status, data: error.response.data };
    return rs;
  }
};

export async function methodDelete (url, token) {
  try {
    const { status, data } = await api.delete(url, { headers: { Authorization: `Bearer ${token}` } });
    const response = { status, data };
    return response;
  } catch (error) {
    const response = { status: error.request.status };
    return response;
  }
}

export const methodPatch = async (url, params, token) => {
  try {
    const { status, data } = await api.patch(url, params, { headers: { Authorization: `Bearer ${token}` } });
    if (status === 200 || status === 400) {
      const rs = { status, data };
      return rs;
    } else {
      alert('PATCH: something has wrong ' + url + ' ' + status);
    }
  } catch (error) {
    const rs = { status: error.response.status, data: error.response.data };
    return rs;
  }
};
