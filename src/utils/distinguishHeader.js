const getHeaders = () => {
  const env = process.env.NODE_ENV;
  if (env === "production") {
    return {
      token: localStorage.getItem("token") || "",
    };
  } else {
    return {
      token:
        localStorage.getItem("token") ||
        "86A507C1F4917D3C5A1FBBA0D75E4256ABB8DED6D4BBF77B5402D145C4FF5E8D61297A2B3FDB564584A1AFFCEF0D8527",
    };
  }
};

export default getHeaders;
