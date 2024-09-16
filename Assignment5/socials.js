try {
    fetch('http://localhost:3000/users')
        .then(response => response.json())
        .then(data => {
            showSocials(data);
            const analytics = analyzeUserActivity(data); // Analyze user activity
            showAnalytics(analytics); // Show the analytics data
        })
        .catch(error => {
            console.log('Error fetching the data', error);
        });
} catch (error) {
    console.log('Error:', error);
}

// Function to display the socials
function showSocials(users) {
    const socials = document.getElementById('dashboard');

    users.forEach(user => {
        const userDiv = document.createElement('div');
        userDiv.classList.add('user');

        let userDetails = `
            <h2>${user.name}</h2>
            <p>Location: ${user.location}</p>
            <p>ID: ${user.id}</p>
            <p>Friends: ${user.friends.join(', ')}</p>
            <h3>Posts</h3>
        `;
        user.posts.forEach(post => {
            userDetails += `
                <div class="post">
                    <p>Content: ${post.content}</p>
                    <p>Timestamp: ${post.timestamp}</p>
                    <p>Likes: ${post.likes}</p>
                </div>
            `;
        });
        userDiv.innerHTML = userDetails;
        socials.appendChild(userDiv);
    });
}

// Function to analyze user activity
function analyzeUserActivity(users) {
    const oneWeekAgo = new Date();
    oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);

    console.log('One week ago:', oneWeekAgo);

    const result = users
        .filter(user => user.posts.some(post => new Date(post.timestamp) > oneWeekAgo))
        .map(user => {
            const popularPosts = user.posts.filter(post => post.likes >= 10);
            return { ...user, popularPosts };
        })
        .filter(user => user.popularPosts.length > 0)
        .reduce(
            (acc, user) => {
                const totalLikes = user.popularPosts.reduce((sum, post) => sum + post.likes, 0);
                acc.activeUsers += 1;
                acc.totalPopularPosts += user.popularPosts.length;
                acc.totalLikes += totalLikes;
                return acc;
            },
            { activeUsers: 0, totalPopularPosts: 0, totalLikes: 0 }
        );
        
    const averageLikesPerUser = result.activeUsers > 0 ? result.totalLikes / result.activeUsers : 0;

    return {
        activeUsers: result.activeUsers,
        totalPopularPosts: result.totalPopularPosts,
        averageLikesPerUser
    };
}

// Function to display the analytics
function showAnalytics(analytics) {
    const analyticsDiv = document.getElementById('analytics');
    analyticsDiv.innerHTML = `
        <h2>Analytics</h2>
        <p>Active Users: ${analytics.activeUsers}</p>
        <p>Total Popular Posts: ${analytics.totalPopularPosts}</p>
        <p>Average Likes Per User: ${analytics.averageLikesPerUser}</p>
    `;
}
