import { Schemas } from 'schemas';
export function userAuth() {
    return {
        CALL_API: {
            types: ['USER_AUTH_REQUEST', 'USER_AUTH_SUCCESS', 'USER_AUTH_FAILURE'],
            endpoint: 'auth'
        }
    };
}
export function fetchUserList() {
    return {
        CALL_API: {
            types: ['USER_LIST_REQUEST', 'USER_LIST_SUCCESS', 'USER_LIST_FAILURE'],
            endpoint: 'users',
            schema: Schemas.USER_ARRAY
        }
    };
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFjdGlvbnMvdXNlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLFNBQVM7QUFFakM7SUFDRSxNQUFNLENBQUM7UUFDTCxRQUFRLEVBQUU7WUFDUixLQUFLLEVBQUUsQ0FBQyxtQkFBbUIsRUFBRSxtQkFBbUIsRUFBRSxtQkFBbUIsQ0FBQztZQUN0RSxRQUFRLEVBQUUsTUFBTTtTQUNqQjtLQUNGLENBQUE7QUFDSCxDQUFDO0FBRUQ7SUFDRSxNQUFNLENBQUM7UUFDTCxRQUFRLEVBQUU7WUFDUixLQUFLLEVBQUUsQ0FBQyxtQkFBbUIsRUFBRSxtQkFBbUIsRUFBRSxtQkFBbUIsQ0FBQztZQUN0RSxRQUFRLEVBQUUsT0FBTztZQUNqQixNQUFNLEVBQUUsT0FBTyxDQUFDLFVBQVU7U0FDM0I7S0FDRixDQUFBO0FBQ0gsQ0FBQyIsImZpbGUiOiJhY3Rpb25zL3VzZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTY2hlbWFzIH0gZnJvbSAnc2NoZW1hcydcblxuZXhwb3J0IGZ1bmN0aW9uIHVzZXJBdXRoKCkge1xuICByZXR1cm4ge1xuICAgIENBTExfQVBJOiB7XG4gICAgICB0eXBlczogWydVU0VSX0FVVEhfUkVRVUVTVCcsICdVU0VSX0FVVEhfU1VDQ0VTUycsICdVU0VSX0FVVEhfRkFJTFVSRSddLFxuICAgICAgZW5kcG9pbnQ6ICdhdXRoJ1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZmV0Y2hVc2VyTGlzdCgpIHtcbiAgcmV0dXJuIHtcbiAgICBDQUxMX0FQSToge1xuICAgICAgdHlwZXM6IFsnVVNFUl9MSVNUX1JFUVVFU1QnLCAnVVNFUl9MSVNUX1NVQ0NFU1MnLCAnVVNFUl9MSVNUX0ZBSUxVUkUnXSxcbiAgICAgIGVuZHBvaW50OiAndXNlcnMnLFxuICAgICAgc2NoZW1hOiBTY2hlbWFzLlVTRVJfQVJSQVlcbiAgICB9XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
