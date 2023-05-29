@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Inter', sans-serif;
}

:root {
    --dark-gray: #343541;
    --light-gray: #444B59;

    --primary-bg: var(--light-gray);
    --primary-text: #ffffff;
    --user-message-bg: var(--dark-gray);
    --user-message-color: var(--light-gray);
    --accent: #01BAC3;

    --wrapper: 700px;
    --primary-padding: 2rem 1rem;
}

body {
    height: 100vh;
    background-color: var(--primary-bg);
    color: var(--primary-text);
}

.chat-container {
    height: 100%;
    display: flex;
    flex-direction: column;
}

.chat-log {
    height: 100%;
    overflow: auto;
}
.chat-log::-webkit-scrollbar {
    width: 0px;
}

.message {
    padding: var(--primary-padding);
    font-size: 1.1rem;
    line-height: 1.5rem;
}
.message .content {
    width: 100%;
    max-width: var(--wrapper);
    margin: 0 auto;
    display: flex;
    align-items: flex-start;
}

.content .message-image, 
.content .message-image img {
    width: 50px;
    height: 50px;
    margin-right: 2rem;
    background-color: var(--light-gray);
    border-radius: .5rem;
}

.message-instance-container {
    position: relative;
}

.message.user-message {
    background-color: var(--user-message-bg);
    position: sticky;
    top: 0;
}

p.thinking {
    animation: thinking 2.2s ease-in-out infinite;
}

@keyframes thinking {
    0% {
        opacity: 0.15;
    }
    50% {
        opacity: 1;
    }
    100% {
        opacity: 0.15;
    }
}


/* new message form */
.new-message {
    background-color: var(--dark-gray);
}
.new-message form {
    width: 100%;
    max-width: var(--wrapper);
    margin: 0 auto;
    padding: var(--primary-padding);
}
.new-message form input {
    width: 100%;
    padding: 1rem;
    border-radius: .5rem;
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.25);
    border: none;
    font-size: 1rem;
    background-color: var(--light-gray);
    color: #eee;
    outline: none;
}
.new-message form input::placeholder {
    color: #eee;
}