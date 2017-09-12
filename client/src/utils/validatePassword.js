const regex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
const pwdRules = `*You must provide a valid password \n
                  *contains at least 1 lowercase character \n
                  *contains at least 1 uppercase character \n
                  *contains at least 1 numeric character \n
                  *contains at least one special character \n
                  *eight characters or longer`;

// Validates a users email on login or signup
export default password => {
  if (regex.test(password) === false) {
    return pwdRules;
  }
  return;
}
