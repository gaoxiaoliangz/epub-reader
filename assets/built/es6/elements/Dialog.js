import React, { Component } from 'react';
class Dialog extends Component {
    render() {
        const defaultClass = 'dialog z1';
        let className = this.props.className ? `${defaultClass} ${this.props.className}` : defaultClass;
        let content = this.props.content;
        let actions = this.props.actions;
        return (React.createElement("div", {className: className}, React.createElement("p", null, content), React.createElement("div", {className: "actions"}, actions.map((action, index) => {
            return React.createElement("span", {key: index, onClick: action.function}, action.text);
        }))));
    }
}
export default Dialog;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVsZW1lbnRzL0RpYWxvZy50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ik9BQU8sS0FBSyxFQUFFLEVBQUUsU0FBUyxFQUFFLE1BQU0sT0FBTztBQVN4QyxxQkFBcUIsU0FBUztJQUM1QixNQUFNO1FBQ0osTUFBTSxZQUFZLEdBQUcsV0FBVyxDQUFBO1FBRWhDLElBQUksU0FBUyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxHQUFDLEdBQUcsWUFBWSxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxFQUFFLEdBQUMsWUFBWSxDQUFBO1FBQzNGLElBQUksT0FBTyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFBO1FBQ2hDLElBQUksT0FBTyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFBO1FBRWhDLE1BQU0sQ0FBQyxDQUNMLHFCQUFDLEdBQUcsSUFBQyxTQUFTLEVBQUUsU0FBVSxHQUN4QixxQkFBQyxDQUFDLFNBQUUsT0FBUSxDQUFJLEVBQ2hCLHFCQUFDLEdBQUcsSUFBQyxTQUFTLEVBQUMsU0FBUyxHQUVwQixPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxFQUFFLEtBQUs7WUFDeEIsTUFBTSxDQUFDLHFCQUFDLElBQUksSUFBQyxHQUFHLEVBQUUsS0FBTSxFQUFDLE9BQU8sRUFBRSxNQUFNLENBQUMsUUFBUyxHQUFFLE1BQU0sQ0FBQyxJQUFLLENBQU8sQ0FBQTtRQUN6RSxDQUFDLENBQ0YsQ0FDRyxDQUNGLENBQ1AsQ0FBQTtJQUNILENBQUM7QUFDSCxDQUFDO0FBRUQsZUFBZSxNQUFNLENBQUEiLCJmaWxlIjoiZWxlbWVudHMvRGlhbG9nLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFJlYWN0RG9tIGZyb20gJ3JlYWN0LWRvbSdcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgY2xhc3NOYW1lPzogc3RyaW5nXG4gIGNvbnRlbnQ6IGFueVxuICBhY3Rpb25zOiBBcnJheTxhbnk+XG59XG5cbmNsYXNzIERpYWxvZyBleHRlbmRzIENvbXBvbmVudDxQcm9wcywgYW55PiB7XG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCBkZWZhdWx0Q2xhc3MgPSAnZGlhbG9nIHoxJ1xuXG4gICAgbGV0IGNsYXNzTmFtZSA9IHRoaXMucHJvcHMuY2xhc3NOYW1lP2Ake2RlZmF1bHRDbGFzc30gJHt0aGlzLnByb3BzLmNsYXNzTmFtZX1gOmRlZmF1bHRDbGFzc1xuICAgIGxldCBjb250ZW50ID0gdGhpcy5wcm9wcy5jb250ZW50XG4gICAgbGV0IGFjdGlvbnMgPSB0aGlzLnByb3BzLmFjdGlvbnNcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NOYW1lfT5cbiAgICAgICAgPHA+e2NvbnRlbnR9PC9wPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFjdGlvbnNcIj5cbiAgICAgICAgICB7XG4gICAgICAgICAgICBhY3Rpb25zLm1hcCgoYWN0aW9uLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICByZXR1cm4gPHNwYW4ga2V5PXtpbmRleH0gb25DbGljaz17YWN0aW9uLmZ1bmN0aW9ufT57YWN0aW9uLnRleHR9PC9zcGFuPlxuICAgICAgICAgICAgfSlcbiAgICAgICAgICB9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IERpYWxvZ1xuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
