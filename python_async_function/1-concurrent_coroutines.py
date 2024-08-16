#!/usr/bin/env python3
"""
Module to use Python - Async
"""
import asyncio
from typing import List
wait_random = __import__('0-basic_async_syntax').wait_random


async def wait_n(n: int, max_delay: int) -> List[float]:
    """
    Function to use async / await
    Args:
        n (int): Number of times to call wait_random
        max_delay (int): Max delay
    Returns:
        List[float]: List of delays in ascending order (done by concurrency)
    """
    tasks = []
    for i in range(n):
        tasks += [asyncio.create_task(wait_random(max_delay))]
    delays = []
    for task in asyncio.as_completed(tasks):
        delay = await task
        delays.append(delay)
    return delays
