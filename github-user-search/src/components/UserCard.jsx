import React from 'react'

export default function UserCard({ user }) {
return (
<a
href={user.html_url}
target="_blank"
rel="noopener noreferrer"
className="user-card"
style={{ display: 'flex', gap: 12, padding: 12, alignItems: 'center', textDecoration: 'none', color: 'inherit', border: '1px solid #eee', borderRadius: 8 }}
>
<img src={user.avatar_url} alt={`${user.login} avatar`} width={64} height={64} style={{ borderRadius: '50%' }} />
<div>
<div style={{ fontWeight: '600' }}>{user.login}</div>
<div style={{ fontSize: 12, color: '#555' }}>{user.type} • ID: {user.id}</div>
</div>
</a>
)
}