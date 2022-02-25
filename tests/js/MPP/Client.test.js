const { WebSocket } = require('ws');
const Client = require('../../../js/MPP/Client');

test('MPP Client class', () => {
    const cl = new Client('wss://mpp.hri7566.info:8443');
    expect(cl.uri).toBe('wss://mpp.hri7566.info:8443');
    expect(cl.ws).toBe(undefined);
    expect(cl.serverTimeOffset).toBe(0);
    expect(cl.user).toBe(undefined);
    expect(cl.participantId).toBe(undefined);
    expect(cl.channel).toBe(undefined);
    expect(cl.ppl).toEqual({});
    expect(cl.connectionTime).toBe(undefined);
    expect(cl.connectionAttempts).toBe(0);
    expect(cl.desiredChannelId).toBe(undefined);
    expect(cl.desiredChannelSettings).toBe(undefined);
    expect(cl.pingInterval).toBe(undefined);
    expect(cl.canConnect).toBe(false);
    expect(cl.noteBuffer).toEqual([]);
    expect(cl.noteBufferTime).toBe(0);
    expect(cl.noteFlushInterval).toBe(undefined);

    expect(cl.bindEventListeners).toBeDefined();
    expect(cl.bindEventListeners).toBeInstanceOf(Function);

    expect(cl.isSupported).toBeDefined();
    expect(cl.isSupported).toBeInstanceOf(Function);

    expect(cl.isConnected).toBeDefined();
    expect(cl.isConnected).toBeInstanceOf(Function);

    expect(cl.isConnecting).toBeDefined();
    expect(cl.isConnecting).toBeInstanceOf(Function);

    expect(cl.start).toBeDefined();
    expect(cl.start).toBeInstanceOf(Function);

    expect(cl.stop).toBeDefined();
    expect(cl.stop).toBeInstanceOf(Function);

    expect(cl.connect).toBeDefined();
    expect(cl.connect).toBeInstanceOf(Function);

    expect(cl.constructor).toBeDefined();
    expect(cl.constructor).toBeInstanceOf(Function);

    expect(cl.isSupported()).toBe(true);
});
