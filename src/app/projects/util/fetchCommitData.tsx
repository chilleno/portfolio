const fetchCommitData = async (username: string, repoName: string): Promise<any> => {
    try {
        const response = await fetch(`https://api.github.com/repos/${username}/${repoName}/commits?per_page=100`);
        if (!response.ok) {
            throw new Error('Network response was not ok.');
        }
        const commitsData = response.json();
        return commitsData;
    } catch (error) {
        console.error('Error fetching commit data:', error);
        return {};
    }
};

export default fetchCommitData;