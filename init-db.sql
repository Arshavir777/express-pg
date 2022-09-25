CREATE TABLE items(
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    title TEXT NOT NULL,
    quantity INT DEFAULT 0,
    distance INT DEFAULT 0,
    date TIMESTAMP DEFAULT NOW()
);

INSERT INTO
    items (title, quantity, distance, date)
VALUES
    ('title1', 2, 20, '2022-09-03 00:00:00'),
    ('title2', 5, 120, '2022-09-22 00:00:00'),
    ('title3', 5, 32, '2022-08-29 00:00:00'),
    ('title4', 7, 233, '2022-09-02 00:00:00');