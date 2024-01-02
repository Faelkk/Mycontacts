import Delay from "../../app/Utils/Delay";
import APIError from "../../errors/APIErrors";





const HttpClient = () => {
  const baseUrl = import.meta.env.VITE_URL_APIMYCONTACTS;

  const GET = async (path: string) => {
    return makeRequest(path, {
      method: "GET",
    });
  };

  const POST = (path: string, options: any) => {
    return makeRequest(path, {
      method: "POST",
      body: options,
      header: options?.header,
    });
  };

  const PUT = (path: string, options: any) => {
    return makeRequest(path, {
      method: "PUT",
      body: options?.body,
      header: options?.header,
    });
  };
  const DELETE = (path: string, options?: any) => {
    return makeRequest(path, {
      method: "DELETE",
      header: options?.header,
    });
  };

  const makeRequest = async (path: string, option: any) => {
    await Delay(500);

    const headers = new Headers();
    if (option) {
      headers.append("Content-Type", "application/json");
    }

    if (option.header) {
      Object.entries(option.header).forEach(([name, value]: any) => {
        headers.append(name, value);
      });
    }

    const result = await fetch(`${baseUrl}${path}`, {
      method: option.method,
      body: option.body ? JSON.stringify(option.body) : null,
      headers: headers,
    });

    let responseBody = null;
    const contentType = result.headers.get("Content-Type");

    if (contentType?.includes("application/json")) {
      responseBody = await result.json();
    }

    if (result.ok) {
      return responseBody;
    }

    throw new APIError(result, responseBody);
  };

  return { GET, POST, PUT, DELETE };
};

export default HttpClient;
