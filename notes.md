### Bugs to be fixed

- Initial profile creation - On new profile, access token is received before useEffect can be triggered, so profile is not created on first load
- This is actual due to first time login issues, investigate why the first getAccessTokenSilently is throwing an error
- Inconsistencies regarding fetch requests - is this with them being triggered or not, or slow responses from server

### Things todo

- Migrate login details to context
- Build out settings page
  - CRUD for categories
  - Curency for profile
  - Manual balance changes
  - Change paydate
  - Ability to specify day in recurring transaction
