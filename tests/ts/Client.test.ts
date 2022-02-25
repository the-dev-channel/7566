const { Client } = require('../../ts/Client');

test('Main client class for input and output to the bot', () => {
    const client = new Client('test_id', 'underlying client', 'type');
    expect(client.id).toBe('test_id');
    expect(client.cl).toBe('underlying client');
    expect(client.type).toBe('type');

    expect(client.start).toBeUndefined();
    expect(client.sendChat).toBeUndefined();
});
