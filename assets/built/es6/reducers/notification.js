export default function notification(state, action) {
    if (typeof state === 'undefined') {
        state = {};
    }
    switch (action.type) {
        case 'SHOW_NOTIFICATION':
            return Object.assign({}, state, {
                content: action.content,
                isVisible: true
            });
        case 'HIDE_NOTIFICATION':
            return Object.assign({}, state, {
                isVisible: false
            });
        default:
            return state;
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZHVjZXJzL25vdGlmaWNhdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxxQ0FBcUMsS0FBSyxFQUFFLE1BQU07SUFDaEQsRUFBRSxDQUFBLENBQUMsT0FBTyxLQUFLLEtBQUssV0FBVyxDQUFDLENBQUMsQ0FBQztRQUNoQyxLQUFLLEdBQUcsRUFBRSxDQUFBO0lBQ1osQ0FBQztJQUVELE1BQU0sQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBQ3BCLEtBQUssbUJBQW1CO1lBQ3RCLE1BQU0sQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRSxLQUFLLEVBQUU7Z0JBQzlCLE9BQU8sRUFBRSxNQUFNLENBQUMsT0FBTztnQkFDdkIsU0FBUyxFQUFFLElBQUk7YUFDaEIsQ0FBQyxDQUFBO1FBRUosS0FBSyxtQkFBbUI7WUFDdEIsTUFBTSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLEtBQUssRUFBRTtnQkFDOUIsU0FBUyxFQUFFLEtBQUs7YUFDakIsQ0FBQyxDQUFBO1FBRUo7WUFDRSxNQUFNLENBQUMsS0FBSyxDQUFBO0lBQ2hCLENBQUM7QUFDSCxDQUFDIiwiZmlsZSI6InJlZHVjZXJzL25vdGlmaWNhdGlvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG5vdGlmaWNhdGlvbihzdGF0ZSwgYWN0aW9uKSB7XG4gIGlmKHR5cGVvZiBzdGF0ZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBzdGF0ZSA9IHt9XG4gIH1cblxuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSAnU0hPV19OT1RJRklDQVRJT04nOlxuICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7XG4gICAgICAgIGNvbnRlbnQ6IGFjdGlvbi5jb250ZW50LFxuICAgICAgICBpc1Zpc2libGU6IHRydWVcbiAgICAgIH0pXG5cbiAgICBjYXNlICdISURFX05PVElGSUNBVElPTic6XG4gICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtcbiAgICAgICAgaXNWaXNpYmxlOiBmYWxzZVxuICAgICAgfSlcblxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gc3RhdGVcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
