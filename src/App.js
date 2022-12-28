import { Button, Input, Select } from '@chakra-ui/react';
import ToggleColorMode from './components/ToggleColorMode';
import { useState, useEffect } from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react';
import { useDisclosure } from '@chakra-ui/react';

const BASE_URL = 'https://feat-aa-staging-web3-api.do-stage-api-1.moralis.io/api/v2';

function App() {
  const [jwt, setJwt] = useState('');
  const [apiKey, setApiKey] = useState('');
  const [contractAddress, setContractAddress] = useState('');
  const [modalContent, setModalContent] = useState('');
  const [chain, setChain] = useState('eth');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [showGif, setShowGif] = useState(true);

  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    setInterval(() => {
      setShowGif(!showGif);
    }, 30000);
  }, [showGif]);

  const getModalContent = () => {
    switch (modalContent) {
      case 'Get NFT Lowest price':
        return (
          <ModalContent>
            <ModalHeader>{modalContent}</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Input
                placeholder="Contract Address ETH (example: 0xBC4CA0EdA7647A8aB7C2061c2E118A18a936f13D)"
                variant="outline"
                size="lg"
                _placeholder={{ opacity: 1, color: 'gray.500' }}
                onChange={(event) => {
                  setContractAddress(event.target.value);
                }}
              />
            </ModalBody>
            <ModalFooter>
              <Button colorScheme="green" mr={3} onClick={getNftLowestPrice} size="lg">
                GO!
              </Button>
            </ModalFooter>
          </ModalContent>
        );
      case 'Get ERC20 token balance by wallet':
        return (
          <ModalContent>
            <ModalHeader>{modalContent}</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Input
                placeholder="Contract Address (example: 0xd8da6bf26964af9d7eed9e03e53415d37aa96045)"
                variant="outline"
                size="lg"
                _placeholder={{ opacity: 1, color: 'gray.500' }}
                onChange={(event) => {
                  setContractAddress(event.target.value);
                }}
              />
              <Select placeholder="Select Chain" onChange={(e) => setChain(e.target.value)} size="lg">
                <option value="eth">eth</option>
                <option value="goerli">goerli</option>
              </Select>
            </ModalBody>
            <ModalFooter>
              <Button colorScheme="green" mr={3} onClick={getErc20TokenBalanceByWallet} size="lg">
                GO!
              </Button>
            </ModalFooter>
          </ModalContent>
        );

      case 'Get ERC20 token price':
        return (
          <ModalContent>
            <ModalHeader>{modalContent}</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Input
                placeholder="Contract Address (example: 0xd8da6bf26964af9d7eed9e03e53415d37aa96045)"
                variant="outline"
                size="lg"
                _placeholder={{ opacity: 1, color: 'gray.500' }}
                onChange={(event) => {
                  setContractAddress(event.target.value);
                }}
              />
              <Select placeholder="Select Chain" onChange={(e) => setChain(e.target.value)} size="lg">
                <option value="eth">eth</option>
                <option value="goerli">goerli</option>
              </Select>
            </ModalBody>
            <ModalFooter>
              <Button colorScheme="green" mr={3} onClick={getErc20TokenPrice} size="lg">
                GO!
              </Button>
            </ModalFooter>
          </ModalContent>
        );

      case 'Get native balance by wallet':
        return (
          <ModalContent>
            <ModalHeader>{modalContent}</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Input
                placeholder="Contract Address (example: 0xd8da6bf26964af9d7eed9e03e53415d37aa96045)"
                variant="outline"
                size="lg"
                _placeholder={{ opacity: 1, color: 'gray.500' }}
                onChange={(event) => {
                  setContractAddress(event.target.value);
                }}
              />
              <Select placeholder="Select Chain" onChange={(e) => setChain(e.target.value)} size="lg">
                <option value="eth">eth</option>
                <option value="goerli">goerli</option>
              </Select>
            </ModalBody>
            <ModalFooter>
              <Button colorScheme="green" mr={3} onClick={getNativeBalanceByWallet} size="lg">
                GO!
              </Button>
            </ModalFooter>
          </ModalContent>
        );
      case 'Login':
        return (
          <ModalContent>
            <ModalHeader>{modalContent}</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Input
                placeholder="Your DEV JWT token"
                variant="outline"
                size="lg"
                _placeholder={{ opacity: 1, color: 'gray.500' }}
                onChange={(event) => {
                  setJwt(event.target.value);
                }}
              />

              <Input
                placeholder="Your Web3 Api Key"
                variant="outline"
                size="lg"
                _placeholder={{ opacity: 1, color: 'gray.500' }}
                onChange={(event) => {
                  setApiKey(event.target.value);
                }}
              />
            </ModalBody>
            <ModalFooter>
              <Button
                colorScheme="green"
                mr={3}
                onClick={() => {
                  if (jwt && apiKey) {
                    localStorage.setItem('jwt', jwt);
                    localStorage.setItem('apiKey', apiKey);
                    setIsLoggedIn(true);
                    onClose();
                  }
                }}
                size="lg"
              >
                GO!
              </Button>
            </ModalFooter>
          </ModalContent>
        );

      case 'Get native transactions by wallet':
        return (
          <ModalContent>
            <ModalHeader>{modalContent}</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Input
                placeholder="Contract Address (example: 0xd8da6bf26964af9d7eed9e03e53415d37aa96045)"
                variant="outline"
                size="lg"
                _placeholder={{ opacity: 1, color: 'gray.500' }}
                onChange={(event) => {
                  setContractAddress(event.target.value);
                }}
              />
              <Select placeholder="Select Chain" onChange={(e) => setChain(e.target.value)} size="lg">
                <option value="eth">eth</option>
                <option value="goerli">goerli</option>
              </Select>
            </ModalBody>
            <ModalFooter>
              <Button colorScheme="green" mr={3} onClick={getNativeTxByWallet} size="lg">
                GO!
              </Button>
            </ModalFooter>
          </ModalContent>
        );
      default:
        return <div></div>;
    }
  };

  const getNftLowestPrice = async () => {
    const response = await fetch(`${BASE_URL}/nft/${contractAddress}/lowestprice`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwt}`,
        'x-api-key': apiKey,
      },
    });
    const data = await response.json();
    alert('done (check console)');
    console.log(data);
  };

  const getErc20TokenBalanceByWallet = async () => {
    const response = await fetch(`${BASE_URL}/${contractAddress}/erc20?chain=${chain}`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwt}`,
        'x-api-key': apiKey,
        accept: 'application/json',
      },
    });
    const data = await response.json();
    alert('done (check console)');
    console.log(data);
  };

  const getErc20TokenPrice = async () => {
    const response = await fetch(`${BASE_URL}/erc20/${contractAddress}/price?chain=${chain}`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwt}`,
        'x-api-key': apiKey,
        accept: 'application/json',
      },
    });
    const data = await response.json();
    alert('done (check console)');
    console.log(data);
  };

  const getFromLocalStorage = () => {
    if (localStorage.getItem('jwt') && localStorage.getItem('apiKey')) {
      setJwt(localStorage.getItem('jwt'));
      setApiKey(localStorage.getItem('apiKey'));
      setIsLoggedIn(true);
      return true;
    }
  };

  const getNativeBalanceByWallet = async () => {
    const response = await fetch(`${BASE_URL}/${contractAddress}/balance?chain=${chain}`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwt}`,
        'x-api-key': apiKey,
        accept: 'application/json',
      },
    });
    const data = await response.json();
    alert('done (check console)');
    console.log(data);
  };

  const getApiVersion = async () => {
    const response = await fetch(`${BASE_URL}/web3/version`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwt}`,
        'x-api-key': apiKey,
        accept: 'application/json',
      },
    });
    const data = await response.json();
    alert('done (check console)');
    console.log(data);
  }; //

  const getNativeTxByWallet = async () => {
    const response = await fetch(`${BASE_URL}/${contractAddress}?chain=${chain}`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwt}`,
        'x-api-key': apiKey,
        accept: 'application/json',
      },
    });
    const data = await response.json();
    alert('done (check console)');
    console.log(data);
  };

  return (
    <body style={{ display: 'flex', flexDirection: 'column', rowGap: '20px' }}>
      <Modal isOpen={isOpen} onClose={onClose} width="100%" size="lg">
        <ModalOverlay />
        {getModalContent()}
      </Modal>
      {!isLoggedIn ? (
        <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column', marginTop: '20%' }}>
          <Button
            colorScheme="red"
            onClick={() => {
              if (!getFromLocalStorage()) {
                setModalContent('Login');
                onOpen();
              }
            }}
          >
            Login
          </Button>
        </div>
      ) : (
        <>
          <div style={{ justifyContent: 'right', display: 'flex' }}>
            <ToggleColorMode />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
            <div style={{ display: 'flex', flexDirection: 'column', rowGap: '5px', marginTop: '10px' }}>
              <Button
                colorScheme="green"
                size="lg"
                onClick={() => {
                  setModalContent('Get NFT Lowest price');
                  onOpen();
                }}
              >
                Get NFT Lowest Price
              </Button>

              <Button
                colorScheme="green"
                size="lg"
                onClick={() => {
                  setModalContent('Get ERC20 token balance by wallet');
                  onOpen();
                }}
              >
                Get ERC20 token balance by wallet
              </Button>

              <Button
                colorScheme="green"
                size="lg"
                onClick={() => {
                  setModalContent('Get ERC20 token price');
                  onOpen();
                }}
              >
                Get ERC20 token price
              </Button>

              <Button
                colorScheme="green"
                size="lg"
                onClick={() => {
                  setModalContent('Get native balance by wallet');
                  onOpen();
                }}
              >
                Get native balance by wallet
              </Button>

              <Button
                colorScheme="green"
                size="lg"
                onClick={() => {
                  getApiVersion();
                }}
              >
                Get API version
              </Button>

              <Button
                colorScheme="green"
                size="lg"
                onClick={() => {
                  setModalContent('Get native transactions by wallet');
                  onOpen();
                }}
              >
                Get native transactions by wallet
              </Button>
            </div>
            <img
              width="300px"
              height="300px"
              src="https://media.giphy.com/media/fem2uTTbZSf2UayVxQ/giphy.gif"
              style={{
                display: showGif ? 'block' : 'none',
              }}
            />
          </div>
        </>
      )}
    </body>
  );
}

export default App;
