const re = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
// email regex email validation tool
// make sure to test with .filter((email) => re.test(email) === false)
export default (emails) => {
  const invalidEmails = emails
    .split(",")
    .map((email) => email.trim())
    .filter((email) => email && re.test(email) === false);

  if (invalidEmails.length) {
    return `These emails are invalid: ${invalidEmails}`;
  }

  return null;
};
